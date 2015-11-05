/****************************************************************
*Name: String Class Test.
*Description: To test the String Class program's functionality
*Author: Babalola Maryam
*****************************************************************/

describe("Tests the methods being added into the String class", function(){
  describe("A suite to test the hasVowels function", function(){
    it("should return truthy", function(){
      expect('School'.hasVowels()).toBeTruthy();
      expect('I love Javascript'.hasVowels()).toBeTruthy();
      expect('Smmt'.hasVowels()).not.toBeTruthy();
    });

    it("should return falsy", function(){
      expect('myth'.hasVowels()).toBeFalsy();
      expect('tryst'.hasVowels()).toBeFalsy();
      expect('small'.hasVowels()).not.toBeFalsy();
    });
  });

  describe("A suite to test the toUpper function", function(){
    it("should return a string in upperCase", function(){
      expect('rowland'.toUpper()).toEqual('ROWLAND');
      expect('Lagos Island'.toUpper()).toEqual('LAGOS ISLAND');
      expect('code'.toUpper()).toEqual('CODE');
    });

    it("should return typeof string", function(){
      expect('maya'.toUpper()).toEqual(jasmine.any(String));
      expect('Make belief'.toUpper()).toEqual(jasmine.any(String));
    });
  });

  describe("A suite to test the toLower function", function(){
    it("should return a string in lowerCase", function(){
      expect('MARYAM'.toLower()).toEqual('maryam');
      expect('Lawrence BOLUTIFE'.toLower()).toEqual('lawrence bolutife');
      expect('NIce'.toLower()).toEqual('nice');
    });

    it("should return typeof string", function(){
      expect('Lagos'.toLower()).toEqual(jasmine.any(String));
      expect('Sabo'.toLower()).toEqual(jasmine.any(String));
    });
  });

  describe("A suite to test the ucFirst function", function(){
    it("should return a string with its first character in upper case", function(){
      expect('fellows'.ucFirst()).toEqual('Fellows');
      expect('emmanuel'.ucFirst()).toEqual('Emmanuel');
      expect('website'.ucFirst()).toEqual('Website');
    });

    it("should return typeof string", function(){
      expect('development'.ucFirst()).toEqual(jasmine.any(String));
      expect('andela'.ucFirst()).toEqual(jasmine.any(String));
    });
  });

  describe("A suite to test the isQuestion function", function(){
    it("should return truthy", function(){
      expect('Are you here?'.isQuestion()).toBeTruthy();
      expect('Andela fellows'.isQuestion()).not.toBeTruthy();
      expect('I passed?'.isQuestion()).toBeTruthy();
    });

    it("should return falsy", function(){
      expect('I am done here'.isQuestion()).toBeFalsy();
      expect('Andela ?fellows'.isQuestion()).toBeFalsy();
      expect('I passed?'.isQuestion()).not.toBeFalsy();
    });
  });

  describe("A suite to test the words function", function(){
    it("should return a list of the words in a string as an array", function(){
      expect('Be reliable'.words()).toEqual(['Be', 'reliable']);
      expect('Always exceed expectations'.words()).toEqual(['Always', 'exceed', 'expectations']);
      expect('Work quickly to fix bugs'.words()).toEqual(['Work', 'quickly', 'to', 'fix', 'bugs']);
    });

    it("should return instanceof Array to be true", function(){
      expect('Be reliable'.words() instanceof Array).toEqual(true);
      expect('Always exceed expectations'.words() instanceof Array).toEqual(true);
    });
  });

  describe("A suite to test the wordCount function", function(){
    it("should return the number of words in a string", function(){
      expect('Learn to unlearn'.wordCount()).toEqual(3);
      expect('Failure is a good thing'.wordCount()).toEqual(5);
      expect('Always work at your own pace'.wordCount()).toEqual(6);
    });
  });

  describe("A suite to test the toCurrency function", function(){
    it("should return a currency representation of a string", function(){
      expect('100000.11'.toCurrency()).toEqual('100,000.11');
      expect('124000.23'.toCurrency()).toEqual('124,000.23');
      expect('200.55'.toCurrency()).toEqual('200.55');
    });
  });

  describe("A suite to test the fromCurrency function", function(){
    it("should return a number representation of a currency string", function(){
      expect('1,200.11'.fromCurrency()).toEqual(1200.11);
      expect('1,000,000.90'.fromCurrency()).toEqual(1000000.9);
      expect('100.11'.fromCurrency()).toEqual(100.11);
    });
  });
});
