import { useEffect, useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Figtree_300Light,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_700Bold,
  Figtree_800ExtraBold,
  Figtree_900Black,
} from "@expo-google-fonts/figtree";
import { BackToTopButton, SafeAreaContainer } from "@app/components";
import { ScrollView, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [loaded, error] = useFonts({
    Figtree_300Light,
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_600SemiBold,
    Figtree_700Bold,
    Figtree_800ExtraBold,
    Figtree_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaContainer>
          <ScrollView ref={scrollViewRef}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea
              nobis accusantium deserunt quia tempora, velit voluptate
              cupiditate maxime adipisci deleniti delectus! Corporis molestiae
              explicabo reprehenderit, animi cumque deleniti quasi ut culpa,
              fugiat dolor quos deserunt iusto dignissimos magnam porro. Error
              reiciendis officia quos voluptas doloribus consequatur porro
              suscipit perspiciatis accusamus assumenda doloremque rerum ipsa
              facilis accusantium dolor dignissimos corporis in esse qui eveniet
              id quas tempore, optio sed! Eaque, incidunt! Ullam atque vel
              maxime reiciendis placeat officiis quidem. Quibusdam voluptatibus
              itaque iste hic eligendi delectus porro ipsum quisquam velit fuga
              consectetur, aliquid dicta illum quo necessitatibus officia
              corrupti atque, voluptas voluptatem ut quidem tempora. Excepturi,
              delectus quidem? Ea sunt iure, quod aliquam itaque veniam eos
              adipisci, qui labore aut illum repellendus a recusandae
              repudiandae vitae assumenda. Voluptas nam minus labore aliquam
              officia temporibus aspernatur, mollitia consequatur deleniti vel
              distinctio repudiandae ducimus quae, omnis veniam cupiditate quo,
              possimus sed molestias tempore et blanditiis doloribus
              consectetur. Id quam sit ab quasi harum voluptatem itaque
              distinctio, architecto saepe laudantium. Cum quos officiis omnis!
              In consequatur, corrupti illum voluptates aliquid, nesciunt ipsum
              a maxime, quis quasi ullam libero. Nisi animi repellat voluptate
              nobis perspiciatis fugiat ipsam molestias! Quis quo deleniti
              dignissimos veritatis quaerat incidunt iste ut nam atque commodi,
              saepe perspiciatis vel voluptatibus laboriosam quae non nihil
              voluptates officia delectus dolor quos ipsam eveniet corporis rem!
              Iure molestias quis perspiciatis at, rerum facilis exercitationem
              quasi suscipit, voluptates commodi necessitatibus. Debitis, fugiat
              voluptatum! Optio, quasi praesentium? Et cupiditate blanditiis
              quia. A in cumque quisquam officia, repudiandae iusto quod vitae
              quia inventore accusamus animi pariatur enim praesentium nihil
              repellat, mollitia voluptatem maxime ab nobis! Accusantium earum
              quos harum veniam doloribus illum similique animi cumque
              perferendis adipisci voluptates, eaque, unde quae? Error
              accusantium natus distinctio. Natus quia nisi beatae blanditiis,
              tenetur laudantium facilis quasi excepturi itaque iste similique
              repellat aut nemo eius illo tempora expedita. Aperiam, non
              asperiores! Ratione unde qui obcaecati illum maxime, omnis dolor
              praesentium assumenda esse ducimus cumque dicta sit quia maiores
              quis laborum repellendus perspiciatis velit! Consequuntur
              molestiae fuga, consequatur eligendi non blanditiis quisquam,
              impedit officiis repudiandae harum assumenda. Fugiat repudiandae
              minima accusantium? Alias deserunt veniam, doloremque molestiae
              esse quo velit quos nulla ipsa illo, fugiat dolor officia ipsam
              cupiditate porro dolorum nemo aliquid nesciunt corrupti provident
              pariatur saepe atque explicabo! Laboriosam deleniti nostrum
              facilis culpa placeat numquam quos ab voluptatum corrupti nisi eum
              doloremque optio debitis temporibus fuga omnis quas molestiae
              fugit veritatis minima, delectus quidem! Quisquam, quia modi odit
              esse est expedita ea corrupti quam quidem, possimus rerum
              quibusdam laboriosam deserunt dolorum id vel ratione culpa, illum
              cumque quos voluptatem optio accusamus. Ipsam excepturi quia
              debitis aliquam consequatur adipisci officia! Tenetur vero harum,
              saepe nam sit similique aut laborum. Voluptate qui neque similique
              rem maxime laudantium, quod officiis nihil repellat ex, illo eius
              suscipit fugiat! Fugit adipisci impedit soluta rerum quod
              laboriosam, nesciunt sapiente asperiores autem cum nisi ad
              mollitia aliquam doloribus reiciendis pariatur ipsam id numquam
              dicta. Dicta optio iusto eveniet doloremque quos minima illum
              corporis delectus amet voluptatum?
            </Text>
            <BackToTopButton scrollViewRef={scrollViewRef} />
          </ScrollView>
        </SafeAreaContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
