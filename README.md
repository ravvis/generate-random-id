# [generate-random-id](https://www.npmjs.com/package/generate-random-id)

A random ID generator function.

## Usage

```javascript
import generateRandomId from "generate-random-id";

const options = {
  length: 12,
  set: "123456789"
}

const user = {
  name: "John Doe",
  userId: generateRandomId(options),
  isActive: true
}

DatabaseService.saveUser(user);
```


## Params

`generateRandomId` accepts one param `options` an object with all the configurable options.

### options

Range of options that can be passed to the generator function.

#### length

Definition: An integer signifying the length of the ID to produce.

Default: 7

#### set

Definition: A string of all the characters to use to produce an ID.

Default: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
