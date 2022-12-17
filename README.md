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
