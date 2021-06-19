module.exports = {
    remainingDays( job ) {
        const remainingDays = (job[ "total-hours"] / job["daily-hours"]).toFixed()
            
        const createdDate = new Date(job.created_at)
        const deuDay = createdDate.getDate() + Number(remainingDays)
        const deuDateInMS = createdDate.setDate(deuDay)
        const timeDiffInMs = deuDateInMS - Date.now()
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs/ dayInMs).toFixed()      
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job[ "total-hours"]
}