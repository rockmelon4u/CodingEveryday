package com.jack.cla;

import com.jack.interf.Translation;

public class Translate {
	
	EnglishTrans trans = new EnglishTrans();
	String str = trans.koreanToEnglish("STR");
	
	Japaneshonnyaku honnyaku = new Japaneshonnyaku();
	String str1 = honnyaku.translateJapanese("STR");
	
	//�������̽��� ������ ȣ���ϱ�
	Translation trans1 = new EnglishTranslation();
	String str2 = trans1.translate("str");
	
}
