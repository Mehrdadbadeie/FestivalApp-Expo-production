import SponsorData from '../jsonTemp/sponsorsInfo.json'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import CustomHeader from '../component/CustomHeader';

//Here we have all the sponsors

function Sponsor() {

  return (
    <>
      <View>
        <CustomHeader title="Home" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <View style={styles.square}>
            <Text style={styles.header}>Sponsorer</Text>
            <View>
              {SponsorData.BigSponsors.map((bigsponsors, index) => (
                <View key={index}>
                  <TouchableOpacity onPress={() => { Linking.openURL(bigsponsors.homepage) }}>
                    <View style={{ borderBottomWidth: 4, borderBottomColor: 'black', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 5 }}>
                      <Image
                        source={{ uri: bigsponsors.picture }} // Update with the sponsor's logo URI
                        style={{ flex: 1, aspectRatio: 1, borderRadius: 10 }}
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.sponsorContainer}>
              {SponsorData.Sponsors.map((sponsor, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    Linking.openURL(sponsor.homepage);
                  }}
                >
                  <View style={[styles.sponsorContainerTwo, { width: Dimensions.get('window').width / 2 }]}>

                    <Image
                      source={{ uri: sponsor.picture }} // Update with the sponsor's logo URI
                      style={styles.sponsorImage}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
              <Text style={styles.link}>#välkommenhit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  square: {
    margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    width: 300,
  },
  link: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'MontserratBold',
    paddingVertical: 5,
  },
  sponsorContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  sponsorContainerTwo: {
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  sponsorImage: {
    flex: 1,
    borderRadius: 10,
  },
});

export default Sponsor;