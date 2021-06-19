const Profile = require('../model/Profile')
module.exports = {
       
      async index(req, res) {
       return res.render("profile", { profile: await Profile.get()})
    },
        async update(req, res){
        const Data = req.body
        const weeksPerYear = 52
        const weeksPerMonth = (weeksPerYear - Data["vacation-per-year"]) / 12
        const weekTotalHours = Data["hours-per-day"] * Data["days-per-week"]
        const monthlyTotalHours = weekTotalHours * weeksPerMonth
        const valueHour = Data["monthly-budget"]/ monthlyTotalHours
        const profile = await Profile.get()
        Profile.update({
          ...profile,
          ...req.body,
          "value-hour": valueHour,
        }) 
      return res.redirect('/profile')
    },

   }