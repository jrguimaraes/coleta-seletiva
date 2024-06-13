import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Callout, Polygon } from "react-native-maps";

function Regiao() {

  const mapStyle = [{ "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }]



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.427401499870232, 
          longitude: -43.4240572928549,
          latitudeDelta: 0.002305,
          longitudeDelta: 0.05525,
        }}
        customMapStyle={mapStyle}
        showsUserLocation
        loadingEnabled
        mapType="satellite"
      >

        <Polygon
          coordinates={[
            { latitude: -22.42139856501283, longitude: -43.42690979154173 },
            { latitude: -22.422127907397485, longitude: -43.42508904769907 },
            { latitude: -22.42173518505099, longitude: -43.42156894293659 },
            { latitude: -22.42515744245022, longitude: -43.420415805169576 },
            { latitude: -22.426279475694393, longitude: -43.419080593018286 },
            { latitude: -22.426559982588515, longitude: -43.4213261770909 },
            { latitude: -22.42886011774108, longitude: -43.42114410270664 },
            { latitude: -22.42925281993379, longitude: -43.42387521847063 },
            { latitude: -22.42526964618271, longitude: -43.427091865925995 },
            { latitude: -22.42156687513392, longitude: -43.42690979154173 },
            { latitude: -22.422071804273134, longitude: -43.4249069733148 },
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#D65F7F"
        />

        <Polygon
          coordinates={[
            { latitude: -22.42936502035621, longitude: -43.423814527009206 },
            { latitude: -22.429084519130093, longitude: -43.421204794168055 },
            { latitude: -22.430094320891335, longitude: -43.420415805169576 },
            { latitude: -22.430991916289617, longitude: -43.417199157714215 },
            { latitude: -22.431665109028994, longitude: -43.41762399794416 },
            { latitude: -22.43559200159542, longitude: -43.42175101732086 },
            { latitude: -22.432506595361506, longitude: -43.42393590993205 },
            { latitude: -22.43160900975876, longitude: -43.426363568388936 },
            { latitude: -22.429477220687946, longitude: -43.42393590993205 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#BAD874"
        />

        <Polygon
          coordinates={[
            { latitude: -22.43183340670366, longitude: -43.42660633423462 },
            { latitude: -22.433123682096056, longitude: -43.42338968677925 },
            { latitude: -22.43665785326108, longitude: -43.423632452624936 },
            { latitude: -22.43884562839813, longitude: -43.42551388792902 },
            { latitude: -22.4364895614371, longitude: -43.42697048300315 },
            { latitude: -22.436377366774394, longitude: -43.4295802158443 },
            { latitude: -22.43822856710862, longitude: -43.42915537561434 },
            { latitude: -22.438284663702884, longitude: -43.43061197068847 },
            { latitude: -22.43665785326108, longitude: -43.431461651148375 },
            { latitude: -22.435984684740525, longitude: -43.43024782191994 },
            { latitude: -22.434526141742907, longitude: -43.43085473653416 },
            { latitude: -22.43183340670366, longitude: -43.42654564277319 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#7E31D5"
        />

        <Polygon
          coordinates={[
            { latitude: -22.429757721120506, longitude: -43.42648495131178 },
            { latitude: -22.427513701789028, longitude: -43.42527112208333 },
            { latitude: -22.42532574801494, longitude: -43.427334631771686 },
            { latitude: -22.42706489356966, longitude: -43.4287912268458 },
            { latitude: -22.42779420618931, longitude: -43.428062929308744 },
            { latitude: -22.42863571598931, longitude: -43.42854846100012 },
            { latitude: -22.42964552101549, longitude: -43.42666702569604 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#EC5CDF"
        />

        <Polygon
          coordinates={[
            { latitude: -22.43132851306745, longitude: -43.430551279227046 },
            { latitude: -22.42785030700135, longitude: -43.428184312231586 },
            { latitude: -22.427401499870232, longitude: -43.42873053538439 },
            { latitude: -22.427513701789028, longitude: -43.43382861814384 },
            { latitude: -22.428355213289464, longitude: -43.43431414983522 },
            { latitude: -22.42689659011333, longitude: -43.436195585139295 },
            { latitude: -22.42768200449723, longitude: -43.43649904244641 },
            { latitude: -22.42863571598931, longitude: -43.43516383029512 },
            { latitude: -22.431160214780565, longitude: -43.4345569156809 },
            { latitude: -22.430318720285083, longitude: -43.432736171838236 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#6B81F0"
        />

        <Polygon
          coordinates={[
            { latitude: -22.430094320891335, longitude: -43.42964090730572 },
            { latitude: -22.429196719688566, longitude: -43.4290339926915 },
            { latitude: -22.429813821138993, longitude: -43.42788085492448 },
            { latitude: -22.4307114183512, longitude: -43.427334631771686 },
            { latitude: -22.431440711812005, longitude: -43.42654564277319 },
            { latitude: -22.431945605040042, longitude: -43.42703117446458 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#D55D1E"
        />

        <Polygon
          coordinates={[
            { latitude: -22.42717709576053, longitude: -43.429337449998606 },
            { latitude: -22.42156687513392, longitude: -43.42697048300315 },
            { latitude: -22.417527375925708, longitude: -43.42800223784733 },
            { latitude: -22.42179128831135, longitude: -43.42885191830723 },
            { latitude: -22.421959597956423, longitude: -43.4323720230697 },
            { latitude: -22.423306067772682, longitude: -43.43310032060677 },
            { latitude: -22.423306067772682, longitude: -43.42970159876714 },
            { latitude: -22.42723319682198, longitude: -43.433707235220986 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#19ACCD"
        />

        <Polygon
          coordinates={[
            { latitude: -22.430094320891335, longitude: -43.42964090730572 },
            { latitude: -22.429196719688566, longitude: -43.4290339926915 },
            { latitude: -22.429813821138993, longitude: -43.42788085492448 },
            { latitude: -22.4307114183512, longitude: -43.427334631771686 },
            { latitude: -22.431440711812005, longitude: -43.42654564277319 },
            { latitude: -22.431945605040042, longitude: -43.42703117446458 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#86E246"
        />

        <Polygon
          coordinates={[
            { latitude: -22.41741516593716, longitude: -43.42769878054021 },
            { latitude: -22.416573588133495, longitude: -43.426363568388936 },
            { latitude: -22.413880504895925, longitude: -43.42654564277319 },
            { latitude: -22.41343165261347, longitude: -43.42885191830723 },
            { latitude: -22.415507582262034, longitude: -43.42690979154173 },
            { latitude: -22.41741516593716, longitude: -43.42769878054021 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#B614E1"
        />

        <Polygon
          coordinates={[
            { latitude: -22.42179128831135, longitude: -43.423511069702094 },
            { latitude: -22.42156687513392, longitude: -43.421386868552325 },
            { latitude: -22.4203325961753, longitude: -43.420112347862464 },
            { latitude: -22.41915441057197, longitude: -43.41974819909393 },
            { latitude: -22.41797621497331, longitude: -43.420294422246734 },
            { latitude: -22.417920110171693, longitude: -43.42205447462797 },
            { latitude: -22.416573588133495, longitude: -43.421811708782286 },
            { latitude: -22.416068639003665, longitude: -43.42369314408636 },
            { latitude: -22.419042201897955, longitude: -43.4249069733148 },
            { latitude: -22.420444803806678, longitude: -43.42514973916049 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#DD2893"
        />

        <Polygon
          coordinates={[
            { latitude: -22.424876932722288, longitude: -43.420476496631 },
            { latitude: -22.424876932722288, longitude: -43.420476496631 },
            { latitude: -22.42066921879746, longitude: -43.4149535736416 },
            { latitude: -22.418817784277977, longitude: -43.40754921534811 },
            { latitude: -22.41825673864149, longitude: -43.40785267265523 },
            { latitude: -22.418705575331998, longitude: -43.410158948189256 },
            { latitude: -22.415395370641757, longitude: -43.41161554326338 },
            { latitude: -22.41567589952248, longitude: -43.414589424873064 },
            { latitude: -22.419659348483048, longitude: -43.41428596756595 },
            { latitude: -22.419659348483048, longitude: -43.41428596756595 },
            { latitude: -22.42414760477735, longitude: -43.42084064539952 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#E8A113"
        />

        <Polygon
          coordinates={[
            { latitude: -22.4253818498245, longitude: -43.419201975941135 },
            { latitude: -22.42796250855741, longitude: -43.420112347862464 },
            { latitude: -22.42796250855741, longitude: -43.420112347862464 },
            { latitude: -22.42796250855741, longitude: -43.420112347862464 },
            { latitude: -22.42779420618931, longitude: -43.409976873805 },
            { latitude: -22.42706489356966, longitude: -43.41258660664614 },
            { latitude: -22.424652524531904, longitude: -43.41185830910907 },
            { latitude: -22.422632834496643, longitude: -43.414892882180176 },
            { latitude: -22.425437951611407, longitude: -43.419141284479714 },
            { latitude: -22.42717709576053, longitude: -43.41932335886398 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#1F79DA"
        />

        <Polygon
          coordinates={[
            { latitude: -22.427513701789028, longitude: -43.41173692618622 },
            { latitude: -22.42566235853228, longitude: -43.40706368365673 },
            { latitude: -22.422632834496643, longitude: -43.4058498544283 },
            { latitude: -22.41960324436137, longitude: -43.406760226349625 },
            { latitude: -22.418986097526968, longitude: -43.40773128973238 },
            { latitude: -22.421342461593795, longitude: -43.410158948189256 },
            { latitude: -22.42454032030069, longitude: -43.41076586280348 },
            { latitude: -22.424876932722288, longitude: -43.41173692618622 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#0DC8B3"
        />

        <Polygon
          coordinates={[
            { latitude: -22.41960324436137, longitude: -43.40651746050394 },
            { latitude: -22.42386709300918, longitude: -43.404453950815586 },
            { latitude: -22.42392319540816, longitude: -43.40311873866431 },
            { latitude: -22.418873888716977, longitude: -43.401055228975956 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#CF4B46"
        />

        <Polygon
          coordinates={[
            { latitude: -22.436545658734445, longitude: -43.43613489367787 },
            { latitude: -22.434526141742907, longitude: -43.4345569156809 },
            { latitude: -22.426055069771003, longitude: -43.43886600944187 },
            { latitude: -22.42588676509044, longitude: -43.44105090205305 },
            { latitude: -22.429757721120506, longitude: -43.441900582512964 },
            { latitude: -22.4364895614371, longitude: -43.43680249975351 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#5941DD"
        />

        <Polygon
          coordinates={[
            { latitude: -22.441762608250958, longitude: -43.44177919959012 },
            { latitude: -22.43817247049167, longitude: -43.43698457413778 },
            { latitude: -22.436545658734445, longitude: -43.436195585139295 },
            { latitude: -22.43951878303855, longitude: -43.4422647312815 },
            { latitude: -22.440752891396478, longitude: -43.442689571511444 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#55D19B"
        />

        <Polygon
          coordinates={[
            { latitude: -22.438284663702884, longitude: -43.44991185542066 },
            { latitude: -22.44092117804924, longitude: -43.44906217496076 },
            { latitude: -22.443221075177085, longitude: -43.4450565385069 },
            { latitude: -22.442379653821874, longitude: -43.44444962389268 },
            { latitude: -22.43979926317479, longitude: -43.44681659088815 },
            { latitude: -22.439294398521326, longitude: -43.44572414458254 },
            { latitude: -22.43761150307478, longitude: -43.44833387742369 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#52D39B"
        />

        <Polygon
          coordinates={[
            { latitude: -22.44277231775611, longitude: -43.44214334835865 },
            { latitude: -22.43609687972074, longitude: -43.435831436370755 },
            { latitude: -22.43609687972074, longitude: -43.435831436370755 },
            { latitude: -22.441313846111825, longitude: -43.4340106925281 },
            { latitude: -22.441426036782712, longitude: -43.43425345837379 },
            { latitude: -22.444286868233295, longitude: -43.43461760714232 },
            { latitude: -22.444567338729094, longitude: -43.43989776428603 },
            { latitude: -22.442828412513137, longitude: -43.442021965435806 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#D0CE5F"
        />

        <Polygon
          coordinates={[
            { latitude: -22.436770047697003, longitude: -43.43170441699407 },
            { latitude: -22.43884562839813, longitude: -43.43012643899709 },
            { latitude: -22.44215527393184, longitude: -43.430551279227046 },
            { latitude: -22.442323558883395, longitude: -43.43243271453113 },
            { latitude: -22.440865082521007, longitude: -43.43322170352961 },
            { latitude: -22.43733101851585, longitude: -43.43218994868545 }
          ]}
          strokeWidth={5}
          strokeColor="#FFF"
          fillColor="#71D76A"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  map: {
    flex: 1,
  },

});



export default Regiao;
