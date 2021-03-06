> A simple container

### Install

    npm install --save hold-it

### Usage

> constructor

**Parameters**

-   `data` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** intialize with this data

> add

It won't rewrite if the key already exists, use update

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** name of the key
-   `value` **any** anything


-   Throws **[TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)** when property is already present

> get

Get value at key property

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** property to get
-   `silent` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** whether to throw error if property not defined (optional, default `false`)


-   Throws **[ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)** when the silent flag is false and the property is not found

Returns **any** whatever stored at the key property

> set

Will not check if property already exist, will add or set it anyway

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** name of the key
-   `value` **any** anything

> unpack

Unpack, just expose the data object, so that we can use desctructing

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the whole data
