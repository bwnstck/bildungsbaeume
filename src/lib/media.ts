import media1 from "$images/carousel/baum1.jpg";
import media2 from "$images/carousel/baum2.jpg";
import media3 from "$images/carousel/baum3.jpg";
import media4 from "$images/carousel/baum4.jpg";
import media5 from "$images/carousel/baum5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
