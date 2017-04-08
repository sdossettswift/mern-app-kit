const mongoose = require('mongoose')

module.exports = {
  connectToDB() {
    const isDev = process.env.NODE_ENV === 'development'
    /* Complete DB Location Path
     * Example : mongodb://localhost/project_name
     */
    const dbLocation = 'mongodb://localhost/'
    if (isDev) {
      mongoose.connect(dbLocation, err => {
        if (err) {
          console.error.bind(console, 'connection error:')
        }
        else {
          console.log('Connected to: ' + dbLocation)
        }
      })
    }
    else {
      mongoose.connect(process.env.MONGODB_URI)
    }
  }
}
