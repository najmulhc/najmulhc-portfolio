export const P = ({children, classname}) => {
    return <p className={`p ${classname}`}>{children}</p>
}
export const H1 = ({children, classname}) => {
    return <h1 className={`h1 ${classname}`}>{children}</h1>
}
export const H2 = ({children, classname}) => {
    return <h2 className={`h2 ${classname}`}>{children}</h2>
}
export const H3 = ({children, classname}) => {
    return <h3 className={`h3 ${classname}`}>{children}</h3>
}
export const Badge = ({children, classname}) => {
    return <div className={`p badge ${classname}`}>{children}</div>
}
