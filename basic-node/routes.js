const  fs= require('fs')

const  requestHandler = (req,res) => {
  const url = req.url
  const method = req.method
  if(url === '/') {
    res.setHeader('Content-Type','text/html')
     // write  is used to  write  data back to ui.
    res.write(`
    <html>
    <body>
      <form action="/message" method="POST"/>
      <input type="text" name="username" placeholder="enter username" />
      <button  type="submit">submit</button>
      </form>
    </body>
    </html>
    `)
    return res.end()
  }
  if(url === '/message' && method==="POST")  {
    const data = []  // always chuck is  an array
    req.on('data', (chunk) => {  // listens to the data coming from ui
      data.push(chunk)  // gets data in  chuck which is usless  and  need  to be parsed
    })
    req.on('end', () => { // on listening  ends
      const parsed= Buffer.concat(data).toString() // Buffer and  concat  is used to parse data.
      fs.writeFile('message.txt', parsed, (err) => {  // create a file with file name as message.txt and adds data to it
        res.statusCode = 302 //  redirection status code
        res.setHeader("Location", '/') // redirection location 
        return res.end()
      }) 
    })
  }
}

module.exports = requestHandler