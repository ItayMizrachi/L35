export const useTime = () => {
    let dt;

    const getDate = () => {
        dt = new Date();
        return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    }

    const getHour = () => {
        dt = new Date();
        return dt.getHours() + ":" + dt.getMinutes();
    }

    return { getDate, getHour };
}
