## chat-web-app 

Simple chat (web app) messaging app. 

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### API Documentation

Web Socket server address: `wss://ws.qexsystems.ru`

### Data format 

JSON

### Example message

``` jsx
   const message = {
    type: 'message',
    id: '001',
    text: 'Test message',
    date: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }),
    author: { initials: 'Random person', avatar: '' },
  }
```

### Props MessageType

|      _Prop_     |       _type_              | _Default value_ |
| --------------- |   :-------------------:   | :-------------: |
| type            |   string                  |     'message'   |
| id              |   string                  |      none       |
| text            |   string                  |      none       |
| date            |   string                  |      none       |
| author          |   UserType                |      none       |




### Props UserType 

|      _Prop_     |       _type_              | _Default value_ |
| --------------- |   :-------------------:   | :-------------: |
| initials        |   string                  |      none       |
| avatar?         |   string                  |      none       |

