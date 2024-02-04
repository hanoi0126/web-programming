const fibo = (N) => {
    let f = [0, 1]
    for (var i=2; i<=N; i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f  // 第0項から第N項までが順に格納された配列
}