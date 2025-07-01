import Banner_Header_Text from "./(home_page_tsx)/Banner_Header_Text";
import Banner_Image from "./(home_page_tsx)/Banner_Image";
import Room_about from "./(home_page_tsx)/Room_about";
import Availability_Section from "./(home_page_tsx)/Availability_Section";
import All_Room_Type_section from "./(home_page_tsx)/All_Room_Type_section";
import About_Proparty_Section from "./(home_page_tsx)/About_Proparty_Section";
import Explore_area_section from "./(home_page_tsx)/Explore_area_section";
import Guest_section from "./(home_page_tsx)/Guest_section";
import Policies_Section from "./(home_page_tsx)/Policies_Section";
import Card_section from "./(home_page_tsx)/Card_section";
import Footer from "./(shared_tsx)/Footer";
import Navbar from "./(shared_tsx)/Navbar";

export default function Home() {
  return (
   
    <div>
      <Navbar></Navbar>
      <Banner_Header_Text></Banner_Header_Text>
      <Banner_Image></Banner_Image>
      <Room_about></Room_about>
      <Availability_Section></Availability_Section>
      <All_Room_Type_section></All_Room_Type_section>
      <About_Proparty_Section></About_Proparty_Section>
      <Explore_area_section></Explore_area_section>
      <Guest_section></Guest_section>
      <Policies_Section></Policies_Section>
      <Card_section></Card_section>
      <Footer></Footer>
    </div>
  );
}
