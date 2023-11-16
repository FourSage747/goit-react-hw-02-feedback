export const Notification = ({message, isShowStatistics}) => {
    if (isShowStatistics) {
        return
    }
    return (
        <p>{message}</p>
    )
}