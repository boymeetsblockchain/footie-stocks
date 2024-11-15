import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, StyleSheet, View } from "react-native";
interface ToastProps {
  message: string;
  success?: boolean;
  visible: boolean;
  onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  success = true,
  visible,
  onHide,
}) => {
  const [showToast, setShowToast] = useState(visible);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setShowToast(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Start fade-out animation after 3 seconds
      const timeout = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setShowToast(false);
          onHide();
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [visible, opacity, onHide]);

  if (!showToast) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { opacity, backgroundColor: success ? "#4CAF50" : "#F44336" },
      ]}
    >
      <Text style={styles.toastMessage}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: 50,
    left: "10%",
    right: "10%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  toastMessage: {
    color: "white",
    fontSize: 16,
  },
});

export default Toast;
