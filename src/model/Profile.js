const Database = require('../db/config')


    module.exports = {
       async get(){
            const db = await Database()
            const Data = await db.get(`SELECT * FROM profile`)
            await db.close()
          
            return   {
                name: Data.name,
                avatar: Data.avatar,
                "monthly-budget": Data.monthly_budget,
                "days-per-week": Data.days_per_weekavatar,
                "hours-per-day": Data.hours_per_day,
                "vacation-per-year": Data.vacation_per_year,
                "value-hour": Data.value_hour,
            };
        },
        async update(newData){
            const db = await Database()
            db.run(`UPDATE profile SET 
            name = "${newData.name}", 
            avatar ="${newData.avatar}" ,
            "monthly_budget" =${newData["monthly-budget"]} ,
            "days_per_week" =${newData["days-per-week"]} ,
            "hours_per_day" = ${newData["hours-per-day"]} ,
            "vacation_per_year" = ${newData["vacation-per-year"]} ,
            "value_hour" =${newData["value-hour"]} 
            `)
            await db.close()
        }
    } 
 