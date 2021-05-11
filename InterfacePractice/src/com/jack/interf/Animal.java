package com.jack.interf;

public interface Animal {
	public static final int tiger = 1;
	final int dog = 3;
	static int rabit = 2;
	
	public void eat();
}

/*
	인터페이스 클래스 작성 방식은 위와 같습니다
	인터페이스에서 포함될 수 있는 것들은 상수와 메서드 원형뿐입니다.
	두가지 멤버 변수는 public static final과
	public abstract 이어야 합니다
	보통 생략해서 많이 사용.

*/