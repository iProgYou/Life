import sys

def create_grid(num):
    grid = [['_' for _ in range(num + 2)]]
    for i in range(1,num + 1):
        grid.append([])
        for j in range(num + 2):
            if j == 0 or j == num + 1:
                grid[i].append('_')
            else:
                grid[i].append('0')

    grid.append(['_' for _ in range(num + 2)])

    return grid



if __name__ == "__main__":
    num = int(sys.argv[1])

    fp = open('grid.js','w+')
    grid = create_grid(num)
    fp.write("export default [")
    fp.write('\n')

    for line in grid:
        fp.write("['")

        line = "','".join(line)
        fp.write(line + "'],")
        fp.write('\n')
    fp.write("]")
    fp.close()
    
