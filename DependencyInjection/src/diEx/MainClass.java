package diEx;

public class MainClass {

	public static void main(String[] args) {
		Cats cats = new Cats();
		
		cats.setFirstCatName("����");
		cats.setSecondCatName("����");
		
		cats.setFirstCatAge(1);
		cats.setSecondCatAge(3);
		
		cats.catsName();
		cats.catsAge();
	}

}
