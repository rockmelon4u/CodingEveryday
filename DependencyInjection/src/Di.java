
public class Di {
	private Coffee coffee;
	
	public static void main(String[] args) {
		System.out.println("hello world");
	}

	public void task() {
		this.coffee = new Coffee();
	}
	
	public void statrtProgramming(){
		this.coffee.drink();
	}
}
