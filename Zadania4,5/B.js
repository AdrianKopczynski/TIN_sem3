auto = {
    rok: 2022,
    przebieg: 15000,
    cena_wyjsciowa: 30000,
    cena_koncowa: 0,

  
    powiekszCeneWyjsciowa: function() {
      this.cena_wyjsciowa += 1000;
    },

    obnizCeneWyjsciowaZaLata: function() {
        this.cena_wyjsciowa -= 1000*((new Date().getFullYear)-rok);
    },
    obnizCeneWyjsciowaZaPrzebieg: function() {
        iloscZmniejszenia = Math.floor(this.przebieg / 100000);
        this.cena_koncowa = this.cena_wyjsciowa - iloscZmniejszenia * 10000;
    },
    dopiszPrzebiegIRok: function(przebieg, rok) {
        this.przebieg += przebieg;
        this.rok = rok;
    
        this.obnizCeneZaPrzebieg();
        this.powiekszCeneWyjsciowa();
    }
};

const samochody = [
    { rok: 2022, przebieg: 150000, cena_wyjsciowa: 30000, cena_koncowa: 0 },
    { rok: 2021, przebieg: 120000, cena_wyjsciowa: 25000, cena_koncowa: 0 },
  ];
  
  function dodajAuto(doDodania) {
    if (doDodania.cena_wyjsciowa > 10000) {
      samochody.push(doDodania);
    }
  }
  
  function zwiekszRok() {
    samochody.forEach(auto => {
      auto.rok += 1;
    });
  }
class Ocena {
    constructor(przedmiot, wartosc) {
      this.przedmiot = przedmiot;
      this.wartosc = wartosc;
    }
}
class Student {
    constructor(imie, nazwisko) {
      this.imie = imie;
      this.nazwisko = nazwisko;
      this.oceny = [];
      this.sredniaOcen = 0;
    }
  
    set dodajOcene(ocena) {
      this.oceny.push(ocena);
      this.obliczSrednia();
    }

    get wyniki() {
        return this.oceny.map(item => `Przedmiot: ${item.przedmiot} - ocena ${item.wartosc}`).join('. ');
    }
  
    obliczSrednia() {
      if (this.oceny.length === 0) {
        this.sredniaOcen = 0;
      } else {
        const sumaOcen = this.oceny.reduce((suma, ocena) => suma + ocena.wartosc, 0);
        this.sredniaOcen = sumaOcen / this.oceny.length;
      }
    }
  
    hello() {
      return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen.toFixed(2)}.`;
    }
}