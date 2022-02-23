import React from 'react'
// import './Register.css'
// export default class Register extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             arr: []
//         }
//         this.textInput = React.createRef()
//     }

//     postText = () => {
//         let postArr = this.state.arr
//         let text = this.textInput.current.value
//         postArr.push(text)
//         this.setState({
//             arr: postArr
//         })
//         this.textInput.current.value = ''
//     }



//     render() {
//         return (
//             <div>
//                 <button onClick={this.postText}>click me</button>
//                 <input type="text" ref={this.textInput} />
//                 <ul>
//                 {this.state.arr.map((el, index) => <li key={index.toString()}>{el}</li>)}
//                 </ul>
//             </div>
//         )
//     }
// }
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        // Создание ссылки для сохранения DOM-элемента textInput
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Явная установка фокуса на поле ввода текста с использованием непосредственно API DOM
        // Примечание: мы получаем доступ к "current" для получения DOM-узла
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Установить фокус на поле ввода текста"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}