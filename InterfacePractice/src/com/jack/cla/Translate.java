package com.jack.cla;

public class Translate {
	
	EnglishTrans trans = new EnglishTrans();
	String str = trans.koreanToEnglish("STR");
	
	Japaneshonnyaku honnyaku = new Japaneshonnyaku();
	String str1 = honnyaku.translateJapanese("STR");
}
