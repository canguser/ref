# Ref JS
> Used for creating ref by using `javascript`
## Get Start
### Import the script
1. Install from `NPM` or `yarn`
    ```shell script
    npm i @palerock/ref
    ```
    ```shell script
    yarn add @palerock/ref
    ```
2. Download the source file - `/build/ref.js` or mini file `/build/ref-mini.js`

### Using the script
1. With `NodeJS`
    ```javascript
    const {ref,refs} = require('@palerock/ref');
    ```
    Or using `import` keyword
    ```javascript
    import {ref,refs} from '@palerock/ref';
    ```
2. With HTML on browser
    ```html
    <script src="./xxx/ref-mini.js"></script>
    <script>
        const {ref,refs} = window;
    </script>
    ```

### Demo for Simple Usage
1. Using with dom
    ```javascript
    const {ref} = window;

    // select a dom
    const dom = document.querySelector('h1');

    // create ref
    const domRef = ref(
        dom, ['title'],
        ({title}, targetDom)=>{
            targetDom.innerHTML = title;
        }
    )

    // change the ref
    domRef.title = 'Hello Ref JS';

    console.log(dom.innerHTML); // Hello Ref JS
    ```
2. Using with multi vars in `NodeJS`
    ```javascript
    const {ref} = require('@palerock/ref');

    const dataSource = {
        project: {
            name: 'project 01'
        },
        owner: {
            name: 'Ryan'
        }
    }

    const dataRef = ref(
        dataSource,
        {
            // declare vars and setting the initial values
            projectName: 'Unknown Project Name',
            ownerName: 'Unknown Owner Name'
        },
        ({projectName, ownerName}, targetDataSource)=>{
            targetDataSource.project.name = projectName;
            targetDataSource.owner.name = ownerName;
        }
    )

    dataRef.projectName = 'project ref name';

    console.log(dataSource.project.name); // project ref name
    console.log(dataSource.owner.name); // Unknown Owner Name
    ```

## Documentation
- `ref`: `function`
    - description: create a ref with a object
    - arguments - ordered as following
    - `target`: `Object` what object the ref related.
    - `vars`: `Object|<Array<String>>` declare the vars used in the mapping function
    - `mapping`: `function` when the ref changed, what to do is following the function
        - callback arguments - ordered as following
        - `ref`: `Object` the ref Object
        - `target`: `Object` the target Object

- `refs`: `function`
    - description: create a ref with multi objects
    - arguments - ordered as following
    - `targets`: `List<Object>` what objects the ref related.
    - `vars`: `Object|<Array<String>>` declare the vars used in the mapping function
    - `mapping`: `function` when the ref changed, what to do is following the function
        - callback arguments - ordered as following
        - `ref`: `Object` the ref Object
        - `target`: `Object` the target Object


## Leave your comments with any question or suggestion please