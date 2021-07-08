# useFetch Hook,

Ejemplo de uso:
```

const url = `https://pokeapi.co/api/v2/pokemon/1`
const { data: null, loading: false, error: null }=useFetch( url );

```

Le enviamos el endpoint de una API a través de la constante url