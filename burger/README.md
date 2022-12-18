# Энэ хэлдээр бүргер апп-г хийж туршина

# Энэ хэлийг сурсны дараа Online Website үйлчилгээний сайт хийж үзэх

# ReactJS-1234

React эхнээс нь дуустал!

```C welcome to my course

```

## Сургалтын тухай :

```C
Та энэхүү гайхалтай фрэймворкийг эзэмшсэнээр нэг дор олон төрлийн програм бүтээх чадвартай болно. Жишээ нь програмистууд React-ийг react-dom library-тай хамт ашиглан вэб апп бүтээдэг бол react-native library-тай ашиглан iOS болон андройд апп, React 360 library-тай ашиглан виртуаль риалити апп, react-native-windows library-тай ашиглан Windows Desktop аппуудыг бүтээх боломжтой. Иймээс React вэб хөгжүүлэгч нь сурсан React мэдлэгээ ашиглаад ухаалаг утасны апп эсвэл desktop програм хөгжүүлэх боломжтой болсон байна гэсэн үг юм! Чухам үүнд React экосистемийн гол давуу тал оршиж байгаа билээ.
```

## 3) DOM, SSOM гэж юу вэ? DOM parsing процессийн цаана юу болдог вэ? Яагаад вэб гарч ирэх гэж уддаг вэ?

```C
    DOM (Document Object Model):
        - Броузер нь дан HTML -г ойлгох боломжгүй
        - Броузер нь HTML - ийг ойлгохын тулд эхлээд DOM болгож хувиргадаг (DOM Parsing)
        - DOM нь HTML таг бүрийг дүрсэлсэн Мод өгөгдлийн бүтэцтэй обьект юм
    DOM parsing
        - DOM болгож хувиргах процесс(parsing) HTML кодыг алхам алхмаар авч ойлгож үүсгэж явна
        - Тиймээс HTML-г авахын хэрээр DOM-г нэмэгдүүлэн үүсгэж явдаг
    DOM үүрэг
        - DOM ашиглан хөтөч нь веб хуудсыг үзүүлдэг
        - DOM-р дамжуулан Javascript веб хуудастай ажилладаг
    Javascrip нь DOM-г ашиглан
        - Веб дээр элементийн утгыг авах
            * Document.getEle..ByID(); гэх мэт
```

```C
    Async - Javascript-үүдийг Паралелээр дуудна
        - DOM үүсч дуусаагүй үед дараагийн JS дуудагдаж ажиллана
    Defer - Javascript-үүдийг Паралелээр дуудна
        - DOM үүссэний дараа дуудна
```

```C
    SSOM(CSS Object Model)
        - Хөтөч нь CSS файлуудыг ойлгохын тулд мөн л SSOM руу хөрвүүлнэ
        - DOM үүсгэхээс ялгаатай нь алхам алхамаар биш бүх CSS файлыг уншиж бүтэн тооцоолол хийж үүсгэдэг
        - Script ашиглах боломжтой
```

## 4) React-ийн цаана байх философи : UI Library

```C
    1. UI LIBRARY - React нь фреймворк биш UI Library
    2. Single source of truth - Үнэний нэг эх үүсвэр
    3. Uni direction data flow - Өгөгдлийн нэг чигт дамжуулалт
    4. Virtual DOM - Виртуйл DOM
    5. Reactive - Хариу автомат риакцийн зарчим
    6. DECLARATIVE - Зарлан программчлах зарчим
```

## 8) Хамгийн анхны React апп #1-р хэсэг! Роботуудын хайлтын апп, codesandbox.io танилцуулга

```C
    https://jsonplaceholder.typicode.com/users - Роботуудын нэр имейл хаягуудыг
    https://robohash.org/1?set=set1&size90-90 - Роботуудын зурагыг авна
    https://codesandbox.io/s/2022-12-17-1234-mn-learn-fo1c7u - Онлайн хөтөч
    JSX = {className}
    standart CSS = {class}
```

```C
    { Class загвар }
    export default class App extends Component {
    render(){
        return (
        <div className="App">
            <h1>Welcome to</h1>
            <h2>Baasankhuu!</h2>
        </div>
        );
    }
    }

    { Function загвар }
    export default function App() {
    return (
        <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Baasankhuu</h2>
        </div>
    );
}

```

```C
Байгуулагч дүрэм
constructor() {
    super();
    this.state = {
      robots: []
    };
}
```

```C
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => this.setState({ robots: data }));
    }
```

```C
    Давталт
    <h2>
        {this.state.robots.map((el) => (
          <p key={el.name}>{el.name}</p>
        ))}
    </h2>
```

```C
        Component using
    export default function Card() {
        return <div>123</div>;
    }
        Component const
    import React from "react";
    import "./card-list.css";
    export const Card = (props) => (
    <div className="card-list">
        <h1>123</h1>
    </div>
    );
```

```C
    export const Card = (props) => (
        <div className="card-list">
            {props.robots.map((el) => (
            <div>{el.name}</div>
            ))}
        </div>
        );

    Параметр дамжуулах
    Жишээ 1
    <Card robots={this.state.robots} />
```

## 9) Хамгийн анхны React апп #2-р хэсэг! card компонент, хайлт гүйцэтгэх, хэлбэржүүлэлт дуусгах

```C
Шүүлт хийх
    const newValue = json.filter((el) => el.name.toLowerCase().includes("Le"));
```

## 17) NodeJS, npm гэж юу вэ?

```C
    2009 онд NODEJS -г Ryan Dahl бүтээсэн
        - Тухайн үед байсан веб сервэрүүдийн хязгаарлагдмал боломжийг Ryan Dahl шүүмжилдэг байсан
    NODE.JS
        - Аппын сервэр талын ажиллагааг хариуцах зориулалттай
        - Javascript хэлийг ашиглана
        - 10.000 болон түүнээс дээш зэрэг холболт хүлээж авах чадвартай өндөр ачаалалттай сервэр бүтээх боломжтой
    Онцлог
        - Single threaded
        - Асинхрон оролт, гаралт
        - Эвентэд үндэслэсэн архитектур
```

## 20) Функц ашиглан компонент бичиж үзэх /хичээлийн файлыг хавсаргасан/

```C
    Жижиг жишээ
    const MyButton = (props) => {
    const ClickHandler = () =>alert(`Өнөөдөр: ${new Date()}`);
    return (
        <div className='MyBtn'>
        <span>Миний нэр </span>
        <input
            type = "button"
            value={props.name ? props.name : "(:"}
            onClick = {ClickHandler}
            />
        </div>
    )
    };
```

## 21) Класс ашиглан компонент бичих /код хавсаргасан/

```C
class Comment extends Component{
    constructor(){
        super();
        this.state = {
            //..Өөрчлөх аттрибутууд
        }
    }
    render(){
        return(
            <div>
               //...Элемент болон компонентийн өгөгдлүүд
           </div>
        )
    }
}
export default Comment;
```

## 22) Компонентод болон React вэб сайтад CSS хэлбэржүүлэлт хийх нь, build процессийн цаад дүр төрх

```C
    npm run build//Файлын нэгтгэл хийнэ

    JS-р inline css бичих арга
    const css = {
        color: "red"
    }
    css.color="blue";
```

## 23) Функц компонент дотор useState hook ашиглан дотоод төлөвтэй ажиллах, default болон named export

```C
    const [historyComment,setHistoryComment] = useState([]);
    const [count,setCount] = useState(0);

    setCount(count + 1);
    setHistoryComment([...historyComment, e.comment])
```

## 25) React компонентууд хэзээ, хэрхэн РЕНДЕР хийгддэг вэ

```C
    Компонентийг дэлгэцэнд гаргах процесийг render гэнэ
    Компонентийн зорилго
        - Өөрийн хариуцаж буй өгөгдөл өөрчлөгдөх бүрт дэлгэц дээр уг өөрчлөлтөд хариу үзүүлэх(ёстой) ёстой
    Хэзээ рендэр хийгдэх вэ?
        - Компонентрүү дамжуулагдсан *props-н утга өөрчлөгдөх* үед
        - Компонент дотор хадгалагдаж байгаа өгөгдөл өөрчлөгдөх үед
    Компонентийг рендэр хийхэд түүний дотор байсан бүх хүү компонент дахин рендэр хийнэ
```

## 26) React компонентууд яаж RENDER хийгдэж байгааг код дээр харцгаая

```C
    key давхардлын алдааг арилгах арга
        - .map((el,index)=><div key={index}>{el}-{index}</div>)
```

## 27) Классын амьдарлын циклийн функцүүдтэй танилцая : componentDidUpdate

```C
    Класс компонентийн амьдралын цикл
        Компонент болон DOM харилцаа
            * Mount: DOM руу компонентийг оруулах /*ComponentDidMount*/
            * Update: DOM дээр байгаа өгөгдлийг өөрчлөх /*ComponentDidUpdate*/
            * UnMount: DOM-c уг обьектийг устгах /*ComponentWillUnMount*/
```

## 28) Амьдарлын циклийн функцүүдийг кодоор туршиж үзэцгээе, Comment-ийг хаах товч нэмэх

```C
    Function deer componentDidMount, componentDidUpdate, componentWillUnmount гэх мэт үйлдлийг хийж болох бөгөөд useEffect-г import-ж авах хэрэгтэй
    классын хувьд шууд ажиллана

    /**{компонентийг өөрчлөх эсэхийг шийднэ Check} */
    shouldComponentUpdate(nextProps, nextStage) {
        console.log('====> shouldComponentUpdate');
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('====> getSnapshotBeforeUpdate');
        return true;
    }
    /**Component tataj bh hugatsaand load bj bln */
    componentDidMount() {
        console.log('====> componentDidMount');
    }

    /**Component өөрчлөгдөх үед дуудагдан */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('====> componentDidUpdate');
    }

    /**
    * Компонент алга болгох үед алерт өгөх юмуу ямар нэгэн логик хийж болно
    */
    componentWillUnmount() {
        console.log('====> componentWillUnmount');
    }
```

## 29) Сургалтаар хийх апптайгаа танилц : Онлайн бургер захиалгын SPA

```C
    Burger Single Page App
    * 30гаруй класс болон функц компонент                       * LocalStorage
    * HOC                                                       * Redux
    * Error handling                                            * Redux devtool
    * Axios                                                     * Redux thunk
    * Form && validation                                        * React Context
    * Routing                                                   * React Hooks
    * Firebase database && email authentication                 * Lazy Loading && optimization
    * REST архитектур                                           * Deployment - Firebase
```

## 30) Онлайн бургер захиалгын аппын компонентуудыг төлөвлөе !

```C

```

## 31) Burger Project үүсгэж хавтаснуудын зохион байгуулалтыг хийх

## 32) CSS Module ашиглах, Toolbar компонентийг хэлбэржүүлэх

```C
    CSS fileName
        * style.module.css
    CSS Хэрэглээ
        * import Css from "./style.module.css"
        * <main className={Css.Content}>
```

## 35) Burger болон BurgerIngredient компонентуудын CSS хэлбэржүүлэлт

```C
     switch (props.type) {
        case 'bread-top':
            return (
                <div className={Css.BreadTop}>
                    <div className={`${Css.Seed}`}></div>
                    <div className={`${Css.Seed} ${Css.Second}`}></div >
                    <div className={`${Css.Seed} ${Css.Third}`}></div >
                    <div className={`${Css.Seed} ${Css.Fourth}`}></div >
                </div >
            )
        case 'salad':
            return (<div className={Css.Salad}></div>)
        case 'bacon':
            return (<div className={Css.Bacon}></div>)
        case 'cheese':
            return (<div className={Css.Cheese}></div>)
        case 'meat':
            return (<div className={Css.Meat}></div>)
        case 'bread-bottom':
            return (<div className={Css.BreadBottom}></div>)
    }
```

## 36) Хачиртай талхны орцыг динамикаар дүрслэх нь

```C

```
