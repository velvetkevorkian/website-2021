/* eslint-disable no-console */
const fs = require('fs')

function main(dryRun = true) {
  // identify Flickr CDN links. The first 10+ digit section appears to be the original image ID
  const regex = /https:\/\/farm\d.static.?flickr.com\/\d{4}\/\d{10,}_.{10,}.jpg/g
  const images = fs.readdirSync('./flickr_archive')
    .filter(file => !file.includes('Zone.Identifier')) // filter out WSL guff

  function doFolder(type) {
    const posts = fs.readdirSync(`./posts/${type}`)
    // console.log(posts)
    posts.forEach(postName => {
      const postPath = `./posts/${type}/${postName}`
      let post = fs.readFileSync(postPath).toString()
      const flickrLinks = post.matchAll(regex)
      for(const match of flickrLinks) {
        const url = match[0]
        const parts = url.replace('https://', '').split('/')
        const id = parts[parts.length - 1].split('_')[0]
        const img = images.find(i => i.match(id))
        if (!img) {
          console.log(`couldn't find an image matching ${id} in ${postPath}`)
        }
        // copy file to new location
        const from = `./flickr_archive/${img}`
        const to = `./public/images/${img}`
        console.log(`copying ${from} to ${to}`)
        if (!dryRun) {
          fs.copyFileSync(from, to)
        }

        // update URL in file
        const newUrl = `/images/${img}`
        console.log(`replacing ${url} with ${newUrl}`)
        post = post.replace(url, newUrl)
      }
      // write the post back to disk
      if (!dryRun) {
        fs.writeFileSync(postPath, post)
      }
    })
  }

  doFolder('blog')
  doFolder('projects')
}

main(false)
