# array.map() 메서드
## 주로 다량의 객체가 들어있는 배열에서 특정 프로퍼티만 뽑아낼 때 사용된다.
```javascript
data = [
  {
    "name": "Delgado Carney",
    "gender": "male",
    "company": "MINGA",
    "email": "delgadocarney@minga.com"
  },
  {
    "name": "Clements Whitfield",
    "gender": "male",
    "company": "KENEGY",
    "email": "clementswhitfield@kenegy.com"
  },
]
// name 프로퍼티만 반환 ['Delgado Carney', 'Clements Whitfield']
data.map(x => x['name']); 

// name과 gender 프로퍼티를 묶어서 반환 ['Delgado Carney', 'male'], ['Clements Whitfield', 'male']
data.map(x => [ x['name'], x['gender'] ]);
```