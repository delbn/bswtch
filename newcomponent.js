        <SafeAreaView style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}>
                <View style={styles.ResultView}>
                      <Text style={styles.SectionTitle}>Result for</Text>
                      <Text style={styles.SectionHead}>Karkala Bypass - Nitte</Text>
                </View>
            </TouchableOpacity>
           <FlatList
                showsVerticalScrollIndicator={false}
                data={busSchedule[id]}
                renderItem={({ item, key }) => (
                    <View key={key} style={styles.RouteView}>
                        {item.Type == "Express" ? (
                            <Image style={styles.RouteLogo} source={require("../assets/icons/BusExpress.png")} />
                        ) : (
                            <Image style={styles.RouteLogo} source={require("../assets/icons/BusLocal.png")} />
                        )}
                        <View style={styles.RouteText}>
                            <Text style={styles.RouteMainHead}>{item.Name}</Text>
                            <Text style={styles.RouteSrcDes}>{item.Time}</Text>
                        </View>
                    </View>
                )}
            />
            <StatusBar style="light" />
        </SafeAreaView>
