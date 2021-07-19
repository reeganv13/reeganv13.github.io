var names=new Array();
names[0]="Yazini";
names[1]="Johnson";
names[2]="Jeni";
names[3]="jas";
names[4]="pavi";
names[5]="franklin";
names[6]="lara";
names[7]="pavithran";
names[8]="lauri";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}