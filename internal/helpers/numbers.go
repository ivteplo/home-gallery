// Copyright (c) 2022 Ivan Teplov

package helpers

import "fmt"

func FixedNumberLength(number int, length int) string {
	result := fmt.Sprintf("%d", number)

	for len(result) < length {
		result = "0" + result
	}

	return result
}
