import { KeyboardType } from "@/schemas/keyboardSchema";
import { KeycapType } from "@/schemas/keycapSchema";
import { toast } from "sonner";

// ===== // ===== //
// KEYBOARD
export const addKeyboardToFavorite = (keyboardId: string | number): void => {
  try {
    const key = "favoriteKeyboardIds";
    // Lấy mảng hiện tại từ localStorage
    const stored = localStorage.getItem(key);
    const favoriteKeyboardIds: (string | number)[] = stored
      ? JSON.parse(stored)
      : [];

    const idStr = keyboardId.toString();
    const index = favoriteKeyboardIds.findIndex(
      (id) => id.toString() === idStr,
    );

    if (index >= 0) {
      // Nếu đã có thì xoá keyboardId đó
      favoriteKeyboardIds.splice(index, 1);

      toast("Removed from favorites", {
        description: (
          <span className="text-gray-500">Product removed from your list.</span>
        ),
      });
    } else {
      // Chưa có thì thêm vào
      favoriteKeyboardIds.push(keyboardId);

      toast("Added to favorites", {
        description: (
          <span className="text-gray-500">Product added to your list.</span>
        ),
      });
    }

    localStorage.setItem(key, JSON.stringify(favoriteKeyboardIds));
    localStorage.setItem("favoriteChanged", "true");
  } catch (error) {
    console.error("Lỗi khi thêm/xoá keyboardId trong favorite:", error);
  }
};

export const isKeyboardInFavorite = (keyboardId: string | number): boolean => {
  try {
    const key = "favoriteKeyboardIds";
    const stored = localStorage.getItem(key);
    if (!stored) return false;
    const favoriteKeyboardIds: (string | number)[] = JSON.parse(stored);
    return favoriteKeyboardIds.some(
      (id) => id.toString() === keyboardId.toString(),
    );
  } catch (error) {
    console.error("Lỗi khi kiểm tra keyboardId trong favorite:", error);
    return false;
  }
};

export const getFavoriteKeyboardData = (allKeyboards: KeyboardType[]) => {
  try {
    const stored = localStorage.getItem("favoriteKeyboardIds");
    if (!stored) return [];

    const favoriteKeyboardIds: (string | number)[] = JSON.parse(stored);

    return allKeyboards.filter((kb) =>
      favoriteKeyboardIds.some(
        (id) => id.toString() === kb.keyboardId.toString(),
      ),
    );
  } catch (error) {
    console.error("Lỗi khi lấy danh sách favorite keyboard:", error);
    return [];
  }
};

export const removeKeyboardFromFavorite = (
  keyboardId: string | number,
): void => {
  try {
    const key = "favoriteKeyboardIds";
    const stored = localStorage.getItem(key);
    if (!stored) return;

    const favoriteKeyboardIds: (string | number)[] = JSON.parse(stored);
    const filtered = favoriteKeyboardIds.filter(
      (id) => id.toString() !== keyboardId.toString(),
    );

    localStorage.setItem(key, JSON.stringify(favoriteKeyboardIds));
    localStorage.setItem("favoriteChanged", "true");

    localStorage.setItem(key, JSON.stringify(filtered));
  } catch (error) {
    console.error("Lỗi khi xoá keyboardId khỏi favorite:", error);
  }
};

// ===== // ===== //
// KEYCAP
export const addKeycapToFavorite = (keycapId: string): void => {
  try {
    const key = "favoriteKeycapIds";
    // Lấy mảng hiện tại từ localStorage
    const stored = localStorage.getItem(key);
    const favoriteKeycapIds: string[] = stored ? JSON.parse(stored) : [];

    const idStr = keycapId.toString();
    const index = favoriteKeycapIds.findIndex((id) => id.toString() === idStr);

    if (index >= 0) {
      // Nếu đã có thì xoá keycapId đó
      favoriteKeycapIds.splice(index, 1);

      toast("Removed from favorites", {
        description: (
          <span className="text-gray-500">Product removed from your list.</span>
        ),
      });
    } else {
      // Chưa có thì thêm vào
      favoriteKeycapIds.push(keycapId);

      toast("Added to favorites", {
        description: (
          <span className="text-gray-500">Product added to your list.</span>
        ),
      });
    }

    localStorage.setItem(key, JSON.stringify(favoriteKeycapIds));
    localStorage.setItem("favoriteChanged", "true");
  } catch (error) {
    console.error("Lỗi khi thêm/xoá keycapId trong favorite:", error);
  }
};

export const isKeycapInFavorite = (keycapId: string): boolean => {
  try {
    const key = "favoriteKeycapIds";
    const stored = localStorage.getItem(key);
    if (!stored) return false;
    const favoriteKeycapIds: string[] = JSON.parse(stored);
    return favoriteKeycapIds.some(
      (id) => id.toString() === keycapId.toString(),
    );
  } catch (error) {
    console.error("Lỗi khi kiểm tra keycapId trong favorite:", error);
    return false;
  }
};

export const getFavoriteKeycapData = (allKeycaps: KeycapType[]) => {
  try {
    const stored = localStorage.getItem("favoriteKeycapIds");
    if (!stored) return [];

    const favoriteKeycapIds: (string | number)[] = JSON.parse(stored);

    return allKeycaps.filter((kc) =>
      favoriteKeycapIds.some((id) => id.toString() === kc.keycapId.toString()),
    );
  } catch (error) {
    console.error("Lỗi khi lấy danh sách favorite keycap:", error);
    return [];
  }
};

export const removeKeycapFromFavorite = (keycapId: string): void => {
  try {
    const key = "favoriteKeycapIds";
    const stored = localStorage.getItem(key);
    if (!stored) return;

    const favoriteKeycapIds: string[] = JSON.parse(stored);
    const filtered = favoriteKeycapIds.filter(
      (id) => id.toString() !== keycapId.toString(),
    );

    localStorage.setItem(key, JSON.stringify(favoriteKeycapIds));
    localStorage.setItem("favoriteChanged", "true");

    localStorage.setItem(key, JSON.stringify(filtered));
  } catch (error) {
    console.error("Lỗi khi xoá keycapId khỏi favorite:", error);
  }
};

// TÍNH SỐ LƯỢNG KEYBOARD
export const getFavoriteKeyboardCount = (): number => {
  try {
    const stored = localStorage.getItem("favoriteKeyboardIds");
    if (!stored) return 0;

    const favoriteKeyboardIds: (string | number)[] = JSON.parse(stored);
    return favoriteKeyboardIds.length;
  } catch (error) {
    console.error("Lỗi khi đếm số lượng favorite keyboard:", error);
    return 0;
  }
};

// TÍNH SỐ LƯỢNG KEYCAP
export const getFavoriteKeycapCount = (): number => {
  try {
    const stored = localStorage.getItem("favoriteKeycapIds");
    if (!stored) return 0;

    const favoriteKeycapIds: string[] = JSON.parse(stored);
    return favoriteKeycapIds.length;
  } catch (error) {
    console.error("Lỗi khi đếm số lượng favorite keycap:", error);
    return 0;
  }
};

// Hàm tính tổng số lượng favorite (keyboard + keycap)
export const getTotalFavoriteCount = (): number => {
  return getFavoriteKeyboardCount() + getFavoriteKeycapCount();
};

// Hàm tính số lượng favorite với tự động kiểm tra favoriteChanged
export const getFavoriteCountWithAutoRefresh = (): {
  totalCount: number;
} => {
  try {
    // Kiểm tra nếu favoriteChanged = true thì reset flag
    const favoriteChanged = localStorage.getItem("favoriteChanged");

    if (favoriteChanged === "true") {
      // Reset flag về false
      localStorage.setItem("favoriteChanged", "false");

      // Log để debug (có thể xóa trong production)
      console.log("Favorite list changed, recalculating counts...");
    }

    const keyboardCount = getFavoriteKeyboardCount();
    const keycapCount = getFavoriteKeycapCount();
    const totalCount = keyboardCount + keycapCount;

    return {
      totalCount,
    };
  } catch (error) {
    console.error("Lỗi khi tính số lượng favorite với auto refresh:", error);
    return {
      totalCount: 0,
    };
  }
};
