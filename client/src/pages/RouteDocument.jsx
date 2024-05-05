import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 50,
      },
      section: {
        marginBottom: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign:'center',
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      label: {
        fontWeight: 'bold',
        marginRight: 5,
      },
      value: {
        marginBottom: 5,
      },
});

// Create PDF document component
const RouteDocument = ({ garbageRoutes }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text style={styles.title}>{garbageRoutes._id}'s Details</Text>
        <Text style={styles.text}>Number: {garbageRoutes.number}</Text>
        <Text style={styles.text}>startLocation: {garbageRoutes.startLocation}</Text>
        <Text style={styles.text}>endLocation: {garbageRoutes.endLocation}</Text>
        <Text style={styles.text}>No Of Houses: {garbageRoutes.noOfHouses}</Text>
        <Text style={styles.text}>House Address: {garbageRoutes.houseAddresses}</Text>
        <Text style={styles.text}>Date: {garbageRoutes.date}</Text>
        <Text style={styles.text}>Last Updated: {new Date().toLocaleString()}</Text>
      </View>
    </Page>
  </Document>
);

export default RouteDocument;