/* 
Этот шаблон в JavaScript мы называем модуль. 
Самый распространенный путь реализации шаблона модуля часто называют "Действенный модуль" и это тот вариант, 
который мы тут и представили.

Давайте изучим некоторые факты об этом коде.

Во-первых, CoolModule() — просто функция, но ее надлежит вызвать для создания объекта модуля. 
Без выполнения внешней функции не случится ни создание внутренней области видимости, ни создание замыканий.

Во-вторых, функция CoolModule() возвращает объект, выполненный в синтаксисе объектного литерала { key: value, ... }. 
У объекта, который мы возвращаем, есть ссылки на наши внутренние функции, но не на наши внутренние переменные. 
Мы храним их скрытыми и приватными. 
Правильнее всего будет думать о возвращаемом значении в виде объекта, 
как по существу о публичном API для нашего модуля. 
*/


function CoolModule() {
    const something = "cool";
    const another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

const foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// Модули — это всего лишь функции, поэтому они могут принимать параметры:

function CoolModule(id) {
	function identify() {
		console.log( id );
	}

	return {
		identify: identify
	};
}

const foo1 = CoolModule( "foo 1" );
const foo2 = CoolModule( "foo 2" );

foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"

// Еще одна небольшая, но полнофункциональная вариация модульного шаблона — дать имя объекту, 
// который вы возвращаете как публичное API:

const foos = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	const publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foos.identify(); // foo module
foos.change();
foos.identify(); // FOO MODULE