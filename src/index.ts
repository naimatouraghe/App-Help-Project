const title = 'Hello TypeScript' as string;

document.getElementById('content')!.innerHTML = `${title}`;

console.log(title, stringYoYo(title));

/**
 * Convertit une lettre sur 2 en majuscule
 * @param title 
 */
function stringYoYo(title: string): string
{
    const arr = title.split('');

    const newArr = arr.map((letter, index) => {
        if (index % 2 == 0) 
        {
            return letter.toUpperCase();
        }
        
        return letter;
        
    });

    return newArr.join('');
}