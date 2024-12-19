import * as Authenticator from "expo-local-authentication";

export function formatAmount(value: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(value);
}

export async function toggleMasking(value: boolean): Promise<boolean> {
  if (!value) {
    return true;
  }

  // authorize user with device authentication to toggle masking
  const hasAuthentication =
    (await Authenticator.hasHardwareAsync()) &&
    (await Authenticator.isEnrolledAsync());

  if (!hasAuthentication) {
    return false;
  }
  const result: any = await Authenticator.authenticateAsync();

  if (!result.success && result?.error === "user_cancel") {
    return value;
  }

  if (!result.success) {
    alert("Authentication failed.");
    return value;
  }
  return false;
}
