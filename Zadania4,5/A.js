function pitagory(a,b,c){
    const warunekPitagorejski = a*a + b*b === c*c || a*a === b*b + c*c || b*b === a*a + c*c;

    return warunekPitagorejski;
}
function A2B(a,b,c){
    for(i=a;i<=b;i++){
        if(i%c==0 && i!=0){
            console.log(i);
        }
    }
}
function tabliczka(a){
    for (i = 1; i <= a; i++) {
        row = '';
        for (j = 1; j <= a; j++) {
            row += (i * j) + ' ';
        }
        console.log(row);
    }
}
function fibonacci(a) {
    fib = [0, 1];

    for (i = 2; i < a; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(fib.join(' '));
}
function choinka(a) {
    for (i = 1; i <= a; i++) {
        star = '*'.repeat(i);
        console.log(star);
    }
}
function choinkaNoc(wysokosc) {
    dlugosc = (wysokosc*2)-3;
    margin = '*'.repeat(dlugosc);
    console.log(margin);
    j=1;
    for (i = 1; i <= wysokosc-2; i++) {
        wiersz = '*'.repeat((dlugosc-j)/2) + ' '.repeat(j) + '*'.repeat((dlugosc-j)/2);
        console.log(wiersz);
        j++;
        j++;
    }
    console.log(margin);
}
function policzPoleFigury(rodzaj,a,b,h) {
    switch (rodzaj.toLowerCase()) {
        case 'prostokat':
            return a*b;
        case 'trapez':
            return ((a+b)*h)/2;
        case 'rownoleglobok':
            return a*h;
        case 'trojkat':
            return (a*h)/2;
        default:
            return 'Nieznany rodzaj figury';
    }
}
const kalkulatorPol = {
    prostokat: (a, b) => a * b,
    trapez: (a, b, h) => ((a + b) / 2) * h,
    rownoleglobok: (a, h) => a * h,
    trojkat: (a, h) => (a * h) / 2,
};

function policzPoleFigury2(rodzaj, a,b,h) {
    const figura = rodzaj.toLowerCase();
    const kalkulator = kalkulatorPol[figura];
    
    return kalkulator ? kalkulator(a,b,h) : 'Nieznany rodzaj figury';
}
function trojkatPascala(wysokosc) {
    for (i = 0; i < wysokosc; i++) {
        wiersz = '';
        for (j = 0; j <= i; j++) {
            wiersz += pascal(i, j) + ' ';
        }
        console.log(wiersz);
    }
}

function pascal(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return pascal(n - 1, k - 1) + pascal(n - 1, k);
    }
}
function cenzor(niedozwoloneSlowa, zdanie) {
    cenzurujSlowo = (slowo) => '*'.repeat(slowo.length);
  
    slowa = zdanie.split(' ');
  
    cenzurowaneSlowa = slowa.map((slowo) => {
      lowercaseSlowo = slowo.toLowerCase();
      if (niedozwoloneSlowa.some(niedozwoloneSlowo => niedozwoloneSlowo.toLowerCase() === lowercaseSlowo)) {
        return cenzurujSlowo(slowo);
      }
      return slowo;
    });
  
    cenzurowaneZdanie = cenzurowaneSlowa.join(' ');
  
    return cenzurowaneZdanie;
  }