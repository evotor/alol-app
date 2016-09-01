
function handleMoment(context, navigation) {
  navigation.pushView("suggestions", {
    receipt: context.receipt;
  })
}
