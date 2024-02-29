import './Alert.css';


//구조분해할당
//기본이 props로 받으며, 그 아래 속성명 그아래 속성명의 값
const Alert = ({alert:{type, text}}) => {
    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}

export default Alert;