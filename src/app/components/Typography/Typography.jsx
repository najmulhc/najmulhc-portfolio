export const P = ({children, classname}) => {
    return <p className={` ${classname} p`}>{children}</p>
}
export const H1 = ({children, classname}) => {
    return <h1 className={`${classname} h1`}>{children}</h1>
}
export const H2 = ({children, classname}) => {
    return <h2 className={`${classname} h2`}>{children}</h2>
}
export const H3 = ({children, classname}) => {
    return <h3 className={` ${classname} h3`}>{children}</h3>
}
export const H4 = ({children, classname}) => {
    return <h4 className={` ${classname} h4`}>{children}</h4>
}
export const Badge = ({children, classname}) => {
    return <div className={`badge ${classname}`}>{children}</div>
}
