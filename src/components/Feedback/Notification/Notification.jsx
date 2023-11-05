export const Notification = ({message, hasFeedback}) => {
    if (hasFeedback) {
        return
    }
    return (
        <p>{message}</p>
    )
}