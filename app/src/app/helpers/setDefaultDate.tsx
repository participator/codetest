export const setDefaultDate = () => {
    const date = new Date()
    const day = date.getDate() + 1
    const dayFormatted = day < 10 ? `0${day}` : day
    const month = date.getMonth() + 1
    const monthFormatted = month < 10 ? `0${month}` : month
    const year = date.getFullYear()

    return `${year}-${monthFormatted}-${dayFormatted}`
}