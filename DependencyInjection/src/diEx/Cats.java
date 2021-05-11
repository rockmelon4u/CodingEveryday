package diEx;

public class Cats {
	private String firstCatName;
	private int firstCatAge;
	private String secondCatName;
	private int secondCatAge;
	
	public void catsName() {
		System.out.println("catsName()");
		System.out.println("첫번째 고양이 이름은 " + firstCatName + "입니다.");
		System.out.println("두번째 고양이 이름은 " + secondCatName + "입니다.");
	}
	
	public void catsAge() {
		System.out.println("catsAge()");
		System.out.println("첫번째 고양이 나이는" + firstCatAge + "살 입니다.");
		System.out.println("두번째 고양이 나이는" + secondCatAge + "살 입니다.");
	}

	public String getFirstCatName() {
		return firstCatName;
	}

	public void setFirstCatName(String firstCatName) {
		this.firstCatName = firstCatName;
	}

	public int getFirstCatAge() {
		return firstCatAge;
	}

	public void setFirstCatAge(int firstCatAge) {
		this.firstCatAge = firstCatAge;
	}

	public String getSecondCatName() {
		return secondCatName;
	}

	public void setSecondCatName(String secondCatName) {
		this.secondCatName = secondCatName;
	}

	public int getSecondCatAge() {
		return secondCatAge;
	}

	public void setSecondCatAge(int secondCatAge) {
		this.secondCatAge = secondCatAge;
	}

	
}
