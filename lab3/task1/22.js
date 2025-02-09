let value = NaN;

value &&= 10; //NaN
value ||= 20; // 20
value &&= 30; //30
value ||= 40; // 30

alert(value); // 30