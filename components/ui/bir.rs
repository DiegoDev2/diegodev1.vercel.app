

use chrono::NaiveDate;

fn main() {
    let birthday = NaiveDate::from_ymd(2025, 1, 15);
    let today = chrono::Local::today().naive_local();

    println!("🎉 Happy Birthday! 🎉");
    if today == birthday {
        println!("Today is your special day! Enjoy it to the fullest! ❤️");
    } else {
        let days_left = (birthday - today).num_days();
        println!("Your birthday is in {} days. Start the countdown! 🎂", days_left);
    }
}


