# Node - Buffers

A buffer is an area of memory. It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JS engine. You can think of a buffer like an array of integers, which represent a byte of data. It is implemented by the Node.js Buffer class. 

Buffers were introduced to help developers deal with binary data in an ecosystem that traditionally only dealt with strings rather than binaries. Buffers in Node.js are not related to the concept of buffering data. That is what happens when a stream processor receives data faster than it can digest.

### Create a buffer
A buffer is created using the [`Buffer.from()`](https://nodejs.org/api/buffer.html#buffer_buffer_from_buffer_alloc_and_buffer_allocunsafe), [`Buffer.alloc()`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding), and [`Buffer.allocUnsafe()`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_allocunsafe_size) methods.

```node
const buf1 = Buffer.from('Hey!');
const buf2 = Buffer.alloc(1024);
const buf3 = Buffer.allocUnsafe(1024);
```

The buffer created by `alloc` is *initialized with zeroes* which makes initialization slower while `allocUnsafe` is *uninitialized* however it may contain old data which may be sensitive.  Older data, if present in the memory, can be accessed or leaked when the `Buffer` memory is read. This is what really makes `allocUnsafe` unsafe and extra care must be taken while using it.

### Using a buffer
##### Access the content of a buffer
A buffer, being an array of bytes, can be accessed like an array:

```node
const buf = Buffer.from('Hey!');
console.log(buf[0]); // 72
console.log(buf[1]); // 101
console.log(buf[2]); // 121

console.log(buf.toString());
```

Those numbers are the UTF-8 bytes that identify the characters in the buffer (`H` → `72`, `e` → `101`, `y` → `121`). This happens because `Buffer.from()` uses **UTF-8 by default.** Keep in mind that some characters may occupy more than one byte in the buffer (`é` → `195 169`).

You can print the full content of the buffer using the `toString()` method:

#####  Get the length of a buffer
```node
const buf = Buffer.from('Hey!');
console.log(buf.length);
```


#####  Iterate over the contents of a buffer
```node
const buf = Buffer.from('Hey!');
for (const item of buf) {
  console.log(item); // 72 101 121 33
}
```


#####  Changing the content of a buffer
You can write to a buffer a whole string of data by using the `write()` method:

```node
const buf = Buffer.alloc(4);
buf.write('Hey!');
```

Just like you can access a buffer with an array syntax, you can also set the contents of the buffer in the same way:

```node
const buf = Buffer.from('Hey!');
buf[1] = 111; // o in UTF-8
console.log(buf.toString()); // Hoy!
```

##### Copy a buffer
Copying a buffer is possible using the `set()` method:

```node
const buf = Buffer.from('Hey!');
const bufcopy = Buffer.alloc(4); // allocate 4 bytes
bufcopy.set(buf);
```

By default you copy the whole buffer. If you only want to copy a part of the buffer, you can use `.subarray()` and the `offset` argument that specifies an offset to write to:

```node
const buf = Buffer.from('Hey?');
const bufcopy = Buffer.from('Moo!');
bufcopy.set(buf.subarray(1, 3), 1);
console.log(bufcopy.toString()); // 'Mey!'
```




___
# References
