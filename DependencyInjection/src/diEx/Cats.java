package diEx;

public class Cats {
	private String firstCatName;
	private int firstCatAge;
	private String secondCatName;
	private int secondCatAge;
	
	public void catsName() {
		System.out.println("catsName()");
		System.out.println("ù��° ����� �̸��� " + firstCatName + "�Դϴ�.");
		System.out.println("�ι�° ����� �̸��� " + secondCatName + "�Դϴ�.");
	}
	
	public void catsAge() {
		System.out.println("catsAge()");
		System.out.println("ù��° ����� ���̴�" + firstCatAge + "�� �Դϴ�.");
		System.out.println("�ι�° ����� ���̴�" + secondCatAge + "�� �Դϴ�.");
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
